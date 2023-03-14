package com.kms.techshare;

import com.kms.techshare.model.User;
import com.kms.techshare.repository.UserDao;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringBootRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootRestApplication.class, args);
	}

	@Bean
	public CommandLineRunner init(UserDao userDao) {
		return args -> {
			User user1 = new User();
			user1.setFirstName("Mona");
			user1.setLastName("Lisa");
			user1.setGender("Female");
			user1.setAge(20);
			user1.setUsername("monalisa");
			user1.setPassword("monalisa123");
			userDao.save(user1);

			User user2 = new User();
			user2.setFirstName("Michael");
			user2.setLastName("Jackson");
			user2.setGender("Male");
			user2.setAge(31);
			user2.setUsername("michael");
			user2.setPassword("michael");
			userDao.save(user2);
		};
	}
}
