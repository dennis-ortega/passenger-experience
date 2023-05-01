package com.collins.passengerExperience.domain;

import com.collins.passengerExperience.data.ComfortRepositoryMockImpl;
import com.collins.passengerExperience.data.EntertainmentRepositoryMockImpl;
import com.collins.passengerExperience.data.ProductRepository;
import com.collins.passengerExperience.models.Product;
import com.collins.passengerExperience.models.ProductType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    public List<Product> getProducts(ProductType productType) {
        ProductRepository productRepository;

        if (ProductType.ENTERTAINMENT.equals(productType)) {
            productRepository = new EntertainmentRepositoryMockImpl();
        } else {
            productRepository = new ComfortRepositoryMockImpl();
        }

        return productRepository.getProducts();
    }

    public Result<String> addProduct(String productName) {
        Result<String> result = new Result<>();
        result.setPayload(productName);

        return result;
    }
}
