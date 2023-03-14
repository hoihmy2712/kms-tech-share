package com.kms.techshare.service;

import com.kms.techshare.model.User;
import com.kms.techshare.model.UserDto;

import java.util.List;

public interface UserService {
    User save(UserDto user);

    List<User> findAll();

    void delete(int id);

    User findOne(String username);

    User findById(int id);

    UserDto update(UserDto userDto);
}
