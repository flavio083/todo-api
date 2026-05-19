package com.flaviano.todo.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import com.flaviano.todo.dto.TaskRequest;
import com.flaviano.todo.entity.Task;
import com.flaviano.todo.enums.TaskStatus;
import com.flaviano.todo.service.TaskService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService service;

    @PostMapping
    public Task create(@Valid @RequestBody TaskRequest request) {
        return service.create(request);
    }

    @GetMapping
    public Page<Task> list(
            Pageable pageable,
            @RequestParam(required = false) TaskStatus status) {

        if (status != null) {
            return service.findByStatus(status, pageable);
        }

        return service.list(pageable);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Task update(
            @PathVariable Long id,
            @Valid @RequestBody TaskRequest request) {

        return service.update(id, request);
    }

    @GetMapping("/{id}")
    public Task findById(@PathVariable Long id) {

        return service.findById(id);
    }    

}