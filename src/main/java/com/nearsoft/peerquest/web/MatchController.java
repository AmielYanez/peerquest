package com.nearsoft.peerquest.web;

import com.nearsoft.peerquest.data.MatchRepository;
import com.nearsoft.peerquest.data.UserRepository;
import com.nearsoft.peerquest.domain.Match;
import com.nearsoft.peerquest.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.Set;

@RestController
public class MatchController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    MatchRepository matchRepository;

    @RequestMapping(value = "/match/all", method = RequestMethod.GET)
    List<Match> showAll() {
        return matchRepository.findAll();
    }

    @RequestMapping(value = "/match/id/{id}", method = RequestMethod.GET)
    Match showById(@PathVariable("id") Match match) {
        return match;
    }

    @RequestMapping(value = "/play/match", method = RequestMethod.GET)
    Map<String, String> initMatch() {
        Map<String, String> pics = new HashMap<String, String>();
        // Check the level of the player / user
        // Get a random pick of people, n times the level of the user
        List<User> users = userRepository.findAll();
        Set<User> randomUsers = new HashSet<>();
        while (randomUsers.size() < 4) {
            randomUsers.add(this.getRandomUser(users));
        }
        for (User u : randomUsers) {
            pics.put(u.getName(), "/img/" + u.getId().toString());
        }
        // Remove people the user already knows, fill blanks with a 2nd, new random pick
        return pics;
    }

    @RequestMapping(value = "/play/match", method = RequestMethod.POST)
    Map<String, String> endMatch(@RequestParam(name = "mistakes") int mistakes,
                                 @RequestParam(name = "time") int time) {
        Map<String, String> pics = new HashMap<String, String>();
        // Check the level of the player / user
        // Get a random pick of people, n times the level of the user
        List<User> users = userRepository.findAll();
        for (User u : users) {
            pics.put(u.getName(), "/img/" + u.getId().toString());
        }
        // Remove people the user already knows, fill blanks with a 2nd, new random pick
        return pics;
    }

    private User getRandomUser(List<User> users) {
        Random rn = new Random();
        int n = users.size();
        int i = Math.abs(rn.nextInt() % n);
        return users.get(i);
    }


}

