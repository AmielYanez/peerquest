package com.nearsoft.peerquest.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @OneToMany
    private transient Set<User> people;

    private int numberOfMistakes;

    // in seconds?
    private int time;

    public Match() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<User> getPeople() {
        return people;
    }

    public void setPeople(Set<User> people) {
        this.people = people;
    }

    public int getNumberOfMistakes() {
        return numberOfMistakes;
    }

    public void setNumberOfMistakes(int numberOfMistakes) {
        this.numberOfMistakes = numberOfMistakes;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

}
