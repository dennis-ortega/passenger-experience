package com.collins.passengerExperience.data;

import com.collins.passengerExperience.models.Product;
import com.collins.passengerExperience.models.ProductType;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class ComfortRepositoryMockImpl implements ProductRepository{

    @Override
    public List<Product> getProducts() {
        List<Product> products = new ArrayList<>();

        Product neckPillow = new Product(new BigDecimal(5), ProductType.COMFORT, "Neck Pillow", "Comfortable Pillow for neck support during your flight.");
        products.add(neckPillow);

        Product blanket = new Product(new BigDecimal(15), ProductType.COMFORT, "Blanket", "Cuddle up for you next flight with our fuzzy blanket.");
        products.add(blanket);

        Product sleepMask = new Product(new BigDecimal(15), ProductType.COMFORT, "Sleep Mask", "Keep away any distractions with our comfortable sleeping mask.");
        products.add(sleepMask);

        return products;
    }

}
