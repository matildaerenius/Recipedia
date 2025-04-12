package recipedia_backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import recipedia_backend.model.Ingredient;
import recipedia_backend.repository.IngredientRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public List<Ingredient> getIngredientsByUser(Long userId) {
        return ingredientRepository.findByUserId(userId);
    }

    public Ingredient addIngredient(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    public Optional<Ingredient> getIngredientById(Long id) {
        return ingredientRepository.findById(id);
    }

    public Ingredient updateIngredient(Long id, Ingredient newIngredientData) {
        return ingredientRepository.findById(id).map(ingredient -> {
            ingredient.setName(newIngredientData.getName());
            ingredient.setCategory(newIngredientData.getCategory());
            return ingredientRepository.save(ingredient);
        }).orElseThrow(() -> new RuntimeException("Ingredient not found"));
    }

    public void deleteIngredient(Long id) {
        ingredientRepository.deleteById(id);
    }
}
