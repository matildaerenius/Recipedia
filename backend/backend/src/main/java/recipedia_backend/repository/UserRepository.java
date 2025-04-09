package recipedia_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import recipedia_backend.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
