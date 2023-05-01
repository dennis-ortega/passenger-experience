package com.collins.passengerExperience.data;

import com.collins.passengerExperience.models.Product;
import com.collins.passengerExperience.models.ProductType;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class EntertainmentRepositoryMockImpl implements ProductRepository{

    @Override
    public List<Product> getProducts() {
        List<Product> products = new ArrayList<>();

        Product headset = new Product(new BigDecimal(10), ProductType.ENTERTAINMENT, "Headset", "Enjoy your tunes with out state of the headset designed for aux or bluetooth.");
        products.add(headset);

        Product gaming = new Product(new BigDecimal(20), ProductType.ENTERTAINMENT, "Gaming", "Playstation portable at your fingertips preloaded with multiple pre-downloaded games!");
        products.add(gaming);

        Product streaming = new Product(new BigDecimal(15), ProductType.ENTERTAINMENT, "Video Streaming", "Enjoy a mix of your favorite tv shows and films from around the world with our new streaming engine.");
        products.add(streaming);

        return products;
    }
}
