package com.collins.passengerExperience.data;

import com.collins.passengerExperience.models.ProductType;

public class ProductRepositoryFactory {

    public ProductRepository getRepository(ProductType productType){
        if (ProductType.ENTERTAINMENT.equals(productType)) {
            return new EntertainmentRepositoryMockImpl();
        }

        return new ComfortRepositoryMockImpl();
    }
}
