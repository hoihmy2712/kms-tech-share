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
			user1.setAge(226);
			user1.setUsername("monalisa");
			user1.setPassword("monalisa123");
			userDao.save(user1);

			User user2 = new User();
			user2.setFirstName("Michael");
			user2.setLastName("Jackson");
			user2.setGender("Male");
			user2.setAge(50);
			user2.setUsername("michael");
			user2.setPassword("michael");
			userDao.save(user2);

			User user3 = new User();
			user3.setFirstName("Will");
			user3.setLastName("Smith");
			user3.setGender("Male");
			user3.setAge(54);
			user3.setUsername("will");
			user3.setPassword("will");
			userDao.save(user3);

			User user4 = new User();
			user4.setFirstName("Jonny");
			user4.setLastName("Depp");
			user4.setGender("Male");
			user4.setAge(59);
			user4.setUsername("jonny");
			user4.setPassword("jonny");
			userDao.save(user4);
		};
	}
}
