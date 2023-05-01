package com.collins.passengerExperience.models;

import java.math.BigDecimal;

public class Product {
    public Product(BigDecimal price, ProductType productType, String name, String description) {
        this.price = price;
        this.productType = productType;
        this.name = name;
        this.description = description;
    }

    private BigDecimal price;
    private ProductType productType;
    private String name;
    private String description;


    public BigDecimal getPrice() {
        return price;
    }
    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
