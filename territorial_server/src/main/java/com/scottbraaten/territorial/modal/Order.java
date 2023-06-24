package com.scottbraaten.territorial.modal;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer orderID;

    @Column
    private Integer customerID;

    @Column(name="landscapetype", nullable = false)
    private String landscapeType;

    @Column(name="yardlength", nullable = false)
    private double yardLength;

    @Column(name="yardwidth", nullable = false)
    private double yardWidth;

    @Column(name="landscapecost", nullable = false)
    private double landscapeCost;

    public Integer getOrderID() {
        return orderID;
    }

    public void setOrderID(Integer orderID) {
        this.orderID = orderID;
    }

    public Integer getCustomerID() {
        return customerID;
    }

    public void setCustomerID(Integer customerID) {
        this.customerID = customerID;
    }

    public String getLandscapeType() {
        return landscapeType;
    }

    public void setLandscapeType(String landscapeType) {
        this.landscapeType = landscapeType;
    }

    public double getYardLength() {
        return yardLength;
    }

    public void setYardLength(double yardLength) {
        this.yardLength = yardLength;
    }

    public double getYardWidth() {
        return yardWidth;
    }

    public void setYardWidth(double yardWidth) {
        this.yardWidth = yardWidth;
    }

    public double getLandscapeCost() {
        return landscapeCost;
    }

    public void setLandscapeCost(double landscapeCost) {
        this.landscapeCost = landscapeCost;
    }
}
