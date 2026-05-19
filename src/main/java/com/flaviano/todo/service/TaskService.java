package com.flaviano.todo.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.flaviano.todo.dto.TaskRequest;
import com.flaviano.todo.entity.Task;
import com.flaviano.todo.enums.TaskStatus;
import com.flaviano.todo.exception.TaskNotFoundException;
import com.flaviano.todo.repository.TaskRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository repository;


    public Task create(TaskRequest request) {

        Task task = new Task();

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());

        task.setStatus(
            request.getStatus() != null
                ? request.getStatus()
                : TaskStatus.PENDING
        );
        
        return repository.save(task);
    }


    public Page<Task> list(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Page<Task> findByStatus(
            TaskStatus status,
            Pageable pageable) {

        return repository.findByStatus(status, pageable);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }


    public Task update(Long id, TaskRequest request) {

        Task existingTask = repository.findById(id)
                .orElseThrow(TaskNotFoundException::new);

        existingTask.setTitle(request.getTitle());
        existingTask.setDescription(request.getDescription());
        existingTask.setStatus(request.getStatus());
        
        return repository.save(existingTask);
    }

    public Task findById(Long id) {

        return repository.findById(id)
            .orElseThrow(TaskNotFoundException::new);
    }
}