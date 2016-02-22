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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    @RequestMapping(value = "/seed", method = RequestMethod.GET)
    void seedUsers() {
        if (userRepository.count() == 0) {
            Map<String, String> seeds = new HashMap<String, String>();
            seeds.put("Hernando Contreras", "ejemplo1@peerquest.com");
            seeds.put("Rafael Manrique", "chucata@peerquest.com");
            seeds.put("César Darío García", "monocromatico@peerquest.com");
            seeds.put("Leonardo Carrasco", "mushasho@peerquest.com");
            seeds.put("Jorge Chávez", "congal@peerquest.com");
            seeds.put("Luis Calderón", "azucaramargo@peerquest.com");
            seeds.put("Erick Grado", "yolo@peerquest.com");
            seeds.put("Gerardo Baeza", "equis@peerquest.com");
            seeds.put("Iris Hernandez", "deadpool@peerquest.com");
            seeds.put("Sandra Vázquez", "arribasonora@peerquest.com");
            seeds.put("Arturo Ruiz", "comonearsoftninguno@peerquest.com");
            seeds.put("Mónica Tye", "teambuildingwoo@peerquest.com");
            seeds.put("Alejandra Landavazo", "palabras@peerquest.com");
            seeds.put("Tomas Ibarra", "random@peerquest.com");
            seeds.put("Elsa Balderrama", "enlavida@peerquest.com");
            seeds.put("Amiel Yanez", "sintemor@peerquest.com");
            seeds.put("Jorge Salido", "lookatme@peerquest.com");
            seeds.put("Hector Benitez", "donlookatme@peerquest.com");
            seeds.put("Miguel Medina", "ytuque@peerquest.com");
            seeds.put("Axel Valdez", "tecreesmucho@peerquest.com");
            seeds.put("Eduardo Figarola", "tumbateelrollo@peerquest.com");
            seeds.put("Christian Ruink", "chacalososteam@peerquest.com");
            seeds.put("Alvaro Delgado", "cancun@peerquest.com");
            seeds.put("Julio Gutierrez", "elnoanoa@peerquest.com");
            seeds.put("Edgar Hernandez", "carmelitasalinas@peerquest.com");
            seeds.put("Cristian Cota", "epn@peerquest.com");
            seeds.put("Christian Bojorquez", "nuevo@peerquest.com");
            seeds.put("Dora Cortazar", "elpeor@peerquest.com");
            seeds.put("Franciso Hernandez", "elmejor@peerquest.com");
            seeds.forEach((k,v) -> addUser(k, v));
        }

    }

    private void addUser(String name, String email) {
        User u = new User();
        u.setName(name);
        u.setEmail(email);
        userRepository.save(u);
    }


}
