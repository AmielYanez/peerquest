package com.nearsoft.peerquest.web;

import com.nearsoft.peerquest.data.UserRepository;
import com.nearsoft.peerquest.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    User showById(@PathVariable("id") User user) {
        return user;
    }

}
