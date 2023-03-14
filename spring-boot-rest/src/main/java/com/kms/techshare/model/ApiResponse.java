package com.kms.techshare.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//@Data: a shortcut for @ToString, @EqualsAndHashCode, @Getter on all fields, @Setter on all non-final fields, and @RequiredArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class ApiResponse<T> {
    private int status;
    private String message;
    private Object result;
}
