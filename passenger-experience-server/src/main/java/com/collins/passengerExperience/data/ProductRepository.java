package com.collins.passengerExperience.data;

import com.collins.passengerExperience.models.Product;

import java.util.List;

public interface ProductRepository {
    List<Product> getProducts();
}
