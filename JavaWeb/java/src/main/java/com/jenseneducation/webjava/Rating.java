package com.jenseneducation.webjava;

public class Rating {

    private int timesRated;
    private double rating;

    public Rating addRating(double newRating) {
        timesRated++;
        rating += (newRating - rating) / timesRated;
        return this;
    }

    public int getTimesRated() {
        return timesRated;
    }

    public void setTimesRated(int timesRated) {
        this.timesRated = timesRated;
    }


    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}
