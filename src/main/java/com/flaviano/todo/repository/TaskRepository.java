package com.flaviano.todo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.flaviano.todo.entity.Task;
import com.flaviano.todo.enums.TaskStatus;

public interface TaskRepository extends JpaRepository<Task, Long> {

    Page<Task> findByStatus(
        TaskStatus status,
        Pageable pageable);
    }