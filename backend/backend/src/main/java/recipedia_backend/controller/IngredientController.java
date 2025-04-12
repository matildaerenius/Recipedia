package recipedia_backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import recipedia_backend.model.Ingredient;
import recipedia_backend.service.IngredientService;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
@RequiredArgsConstructor
public class IngredientController {
    private final IngredientService ingredientService;

    // Hämta alla ingredienser för en given användare (userId kan i framtiden ersättas med data från security context)
    @GetMapping("/user/{userId}")
    public List<Ingredient> getIngredientsByUser(@PathVariable Long userId) {
        return ingredientService.getIngredientsByUser(userId);
    }

    // Lägg till en ingrediens kopplad till en användare
    @PostMapping("/user/{userId}")
    public Ingredient addIngredient(@PathVariable Long userId, @RequestBody Ingredient ingredient) {
        return ingredientService.addIngredient(ingredient);
    }

    // Hämta en enskild ingrediens
    @GetMapping("/{id}")
    public Ingredient getIngredientById(@PathVariable Long id) {
        return ingredientService.getIngredientById(id)
                .orElseThrow(() -> new RuntimeException("Ingredient not found"));
    }

    // Uppdatera en ingrediens
    @PutMapping("/{id}")
    public Ingredient updateIngredient(@PathVariable Long id, @RequestBody Ingredient ingredient) {
        return ingredientService.updateIngredient(id, ingredient);
    }

    // Radera en ingrediens
    @DeleteMapping("/{id}")
    public void deleteIngredient(@PathVariable Long id) {
        ingredientService.deleteIngredient(id);
    }
}
