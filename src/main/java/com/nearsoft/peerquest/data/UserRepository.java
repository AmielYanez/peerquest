package com.nearsoft.peerquest.data;

import com.nearsoft.peerquest.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("from User u where u.email = :email")
    Optional<User> findByEmail(@Param("email") String email);

    @Query("from User u ORDER BY rand()")
    Optional<List<User>> getRandom();

}
