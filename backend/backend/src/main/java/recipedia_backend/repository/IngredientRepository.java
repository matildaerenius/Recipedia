package recipedia_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import recipedia_backend.model.Ingredient;
import java.util.List;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    List<Ingredient> findByUserId(Long userId);
}
