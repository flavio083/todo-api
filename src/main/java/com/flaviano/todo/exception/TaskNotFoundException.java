package com.flaviano.todo.exception;

public class TaskNotFoundException extends RuntimeException {

    public TaskNotFoundException() {
        super("Task não encontrada");
    }
}