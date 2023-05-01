package com.collins.passengerExperience.controllers;

import com.collins.passengerExperience.domain.ProductService;
import com.collins.passengerExperience.domain.Result;
import com.collins.passengerExperience.domain.ResultType;
import com.collins.passengerExperience.models.Product;
import com.collins.passengerExperience.models.ProductType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    private final ProductService productService;
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping("/products")
    public List<Product> getProducts(@RequestParam(value = "productType") ProductType productType) {
        return productService.getProducts(productType);
    }

    @PostMapping("/products/purchase")
    public ResponseEntity<Object> purchase(@RequestBody String productName) {
        Result<String> result = productService.addProduct(productName);
        if (result.getType() == ResultType.INVALID) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
    }
}
