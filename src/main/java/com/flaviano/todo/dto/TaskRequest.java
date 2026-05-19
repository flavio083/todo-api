package com.flaviano.todo.dto;

import com.flaviano.todo.enums.TaskStatus;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class TaskRequest {

    @NotBlank
    @Size(min = 3, max = 100)
    private String title;

    @NotBlank
    private String description;

    private TaskStatus status;
}