// package com.example.spring.Art.config;

// import org.springframework.boot.CommandLineRunner;

// import com.example.spring.Art.repository.UserRepository;

// public class UserInitialization implements CommandLineRunner {
// private final UserRepository userRepository;
// private final PasswordEncoder passwordEncoder;

//     @Override
//     public void run(String... args) throws Exception {
//         if(userRepository.count()==0)
//         {
//             User user=createUser();
//             userRepository.save(user);
//         }
//         catch(Exception e)
//         {
//             log.error(msg:"Error during user initialization");
//         }
//         throw new UnsupportedOperationException("Unimplemented method 'run'");
//     }
    
// }
