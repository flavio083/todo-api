const API_URL = 'https://todo-api-chfi.onrender.com/tasks';

const statusLabels = {
    PENDING: 'Pendente',
    IN_PROGRESS: 'Em progresso',
    DONE: 'Concluída'
};

const statusIcons = {
    PENDING: 'fa-regular fa-clock',
    IN_PROGRESS: 'fa-solid fa-spinner',
    DONE: 'fa-solid fa-circle-check'
};

const state = {
    tasks: [],
    filter: 'ALL',
    editingId: null
};

const elements = {
    form: document.querySelector('#taskForm'),
    taskId: document.querySelector('#taskId'),
    title: document.querySelector('#title'),
    description: document.querySelector('#description'),
    status: document.querySelector('#status'),
    submitButton: document.querySelector('#submitButton'),
    cancelEditButton: document.querySelector('#cancelEditButton'),
    formTitle: document.querySelector('#formTitle'),
    refreshButton: document.querySelector('#refreshButton'),
    taskList: document.querySelector('#taskList'),
    loading: document.querySelector('#loading'),
    emptyState: document.querySelector('#emptyState'),
    alert: document.querySelector('#alert'),
    listSubtitle: document.querySelector('#listSubtitle'),
    filterButtons: document.querySelectorAll('.filter-button'),
    countAll: document.querySelector('#countAll'),
    countPending: document.querySelector('#countPending'),
    countProgress: document.querySelector('#countProgress'),
    countDone: document.querySelector('#countDone')
};

document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    loadTasks();
});

function bindEvents() {
    elements.form.addEventListener('submit', handleSubmit);
    elements.cancelEditButton.addEventListener('click', resetForm);
    elements.refreshButton.addEventListener('click', loadTasks);

    elements.filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            state.filter = button.dataset.filter;
            elements.filterButtons.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            renderTasks();
        });
    });
}

async function loadTasks() {
    setLoading(true);
    hideAlert();

    try {
        const response = await fetch(API_URL);
        const data = await parseResponse(response);
        state.tasks = Array.isArray(data) ? data : data.content || [];
        renderTasks();
    } catch (error) {
        showAlert(error.message || 'Não foi possível carregar as tarefas.', true);
    } finally {
        setLoading(false);
    }
}

async function handleSubmit(event) {
    event.preventDefault();

    const task = {
        title: elements.title.value.trim(),
        description: elements.description.value.trim(),
        status: elements.status.value
    };

    if (!task.title || !task.description) {
        showAlert('Preencha título e descrição para continuar.', true);
        return;
    }

    const isEditing = Boolean(state.editingId);
    const url = isEditing ? `${API_URL}/${state.editingId}` : API_URL;
    const method = isEditing ? 'PUT' : 'POST';

    elements.submitButton.disabled = true;
    hideAlert();

    try {
        await fetchJson(url, method, task);
        showAlert(isEditing ? 'Tarefa atualizada com sucesso.' : 'Tarefa criada com sucesso.');
        resetForm();
        await loadTasks();
    } catch (error) {
        showAlert(error.message || 'Não foi possível salvar a tarefa.', true);
    } finally {
        elements.submitButton.disabled = false;
    }
}

async function updateStatus(task, status) {
    const payload = {
        title: task.title,
        description: task.description,
        status
    };

    try {
        await fetchJson(`${API_URL}/${task.id}`, 'PUT', payload);
        await loadTasks();
        showAlert('Status atualizado.');
    } catch (error) {
        showAlert(error.message || 'Não foi possível atualizar o status.', true);
    }
}

async function deleteTask(id) {
    const confirmed = window.confirm('Deseja excluir esta tarefa?');

    if (!confirmed) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        await parseResponse(response);
        await loadTasks();
        showAlert('Tarefa excluída.');
    } catch (error) {
        showAlert(error.message || 'Não foi possível excluir a tarefa.', true);
    }
}

function startEdit(task) {
    state.editingId = task.id;
    elements.taskId.value = task.id;
    elements.title.value = task.title || '';
    elements.description.value = task.description || '';
    elements.status.value = task.status || 'PENDING';
    elements.formTitle.textContent = 'Editar tarefa';
    elements.submitButton.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Salvar alterações';
    elements.cancelEditButton.classList.remove('hidden');
    elements.title.focus();
}

function resetForm() {
    state.editingId = null;
    elements.form.reset();
    elements.taskId.value = '';
    elements.status.value = 'PENDING';
    elements.formTitle.textContent = 'Nova tarefa';
    elements.submitButton.innerHTML = '<i class="fa-solid fa-plus"></i> Criar tarefa';
    elements.cancelEditButton.classList.add('hidden');
}

function renderTasks() {
    updateCounters();

    const visibleTasks = state.filter === 'ALL'
        ? state.tasks
        : state.tasks.filter((task) => task.status === state.filter);

    elements.taskList.innerHTML = '';
    elements.emptyState.classList.toggle('hidden', visibleTasks.length > 0);
    elements.listSubtitle.textContent = `${visibleTasks.length} tarefa(s) exibida(s)`;

    visibleTasks.forEach((task) => {
        const card = document.createElement('article');
        card.className = 'task-card';
        card.dataset.status = task.status;

        card.innerHTML = `
            <div>
                <div class="task-title-row">
                    <h3>${escapeHtml(task.title)}</h3>
                    <span class="status-badge ${getStatusClass(task.status)}">
                        <i class="${statusIcons[task.status] || statusIcons.PENDING}"></i>
                        ${statusLabels[task.status] || task.status || 'Pendente'}
                    </span>
                </div>
                <p class="task-description">${escapeHtml(task.description)}</p>
                <div class="task-meta">
                    ${task.createdAt ? `<span><i class="fa-regular fa-calendar-plus"></i> Criada em ${escapeHtml(task.createdAt)}</span>` : ''}
                    ${task.updatedAt ? `<span><i class="fa-regular fa-pen-to-square"></i> Atualizada em ${escapeHtml(task.updatedAt)}</span>` : ''}
                </div>
            </div>
            <div class="task-actions" aria-label="Acoes da tarefa">
                <button class="icon-button edit-button" type="button" title="Editar tarefa">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="icon-button status-button" type="button" title="Alterar status">
                    <i class="fa-solid fa-arrow-rotate-right"></i>
                </button>
                <button class="icon-button danger delete-button" type="button" title="Excluir tarefa">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        card.querySelector('.edit-button').addEventListener('click', () => startEdit(task));
        card.querySelector('.status-button').addEventListener('click', () => updateStatus(task, getNextStatus(task.status)));
        card.querySelector('.delete-button').addEventListener('click', () => deleteTask(task.id));
        elements.taskList.appendChild(card);
    });
}

function updateCounters() {
    elements.countAll.textContent = state.tasks.length;
    elements.countPending.textContent = countByStatus('PENDING');
    elements.countProgress.textContent = countByStatus('IN_PROGRESS');
    elements.countDone.textContent = countByStatus('DONE');
}

function countByStatus(status) {
    return state.tasks.filter((task) => task.status === status).length;
}

function getNextStatus(status) {
    const order = ['PENDING', 'IN_PROGRESS', 'DONE'];
    const index = order.indexOf(status);
    return order[(index + 1) % order.length] || 'PENDING';
}

function getStatusClass(status) {
    if (status === 'DONE') {
        return 'done';
    }

    if (status === 'IN_PROGRESS') {
        return 'in-progress';
    }

    return '';
}

async function fetchJson(url, method, body) {
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return parseResponse(response);
}

async function parseResponse(response) {
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
        const message = data?.message || data?.error || `Erro ${response.status}`;
        throw new Error(message);
    }

    return data;
}

function setLoading(isLoading) {
    elements.loading.classList.toggle('hidden', !isLoading);
    elements.refreshButton.disabled = isLoading;
}

function showAlert(message, isError = false) {
    elements.alert.textContent = message;
    elements.alert.classList.toggle('error', isError);
    elements.alert.classList.remove('hidden');
}

function hideAlert() {
    elements.alert.classList.add('hidden');
    elements.alert.classList.remove('error');
}

function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}
