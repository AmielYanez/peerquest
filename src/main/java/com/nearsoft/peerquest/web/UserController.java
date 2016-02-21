package com.nearsoft.peerquest.web;

import com.nearsoft.peerquest.data.UserRepository;
import com.nearsoft.peerquest.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    List<User> showAll() {
        return userRepository.findAll();
    }

    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    User showById(@PathVariable("id") User user) {
        return user;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    User addUser(@RequestBody User user) {
        userRepository.save(user);
        return user;
    }

    @RequestMapping(value = "/addimage/{id}", method = RequestMethod.POST)
    public
    @ResponseBody
    String handleFileUpload(@RequestParam("id") String id,
                            @RequestParam("file") MultipartFile file) {
        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                String separator = System.getProperty("file.separator");
                File f = new File("img" + separator + id);
                if (!f.exists()) {
                    f.createNewFile();
                }
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(f, false));
                stream.write(bytes);
                stream.close();
                return "You successfully uploaded " + id + "!";
            } catch (Exception e) {
                return "You failed to upload " + id + " => " + e.getMessage();
            }
        } else {
            return "You failed to upload " + id + " because the file was empty.";
        }
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @Scope("session")
    User loginUser(@RequestBody User user) {
        Optional<User> u = userRepository.findByEmail(user.getEmail());
        if (u.isPresent()) {
            return u.get();
        } else {
            user = userRepository.save(user);
        }
        return user;
    }


}
