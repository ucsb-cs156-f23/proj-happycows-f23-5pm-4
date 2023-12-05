package edu.ucsb.cs156.happiercows.entities;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

public class CommonsTests {

    @Test
    void test_gameInProgress_true() throws Exception {
        assertTrue(Commons.builder()
                .startingDate(LocalDate.parse("2000-01-01"))
                .lastDate(LocalDate.parse("3000-12-31"))
                .build().gameInProgress());
    }

    @Test
    void test_gameInProgress_before_start() throws Exception {
        assertFalse(Commons.builder()
                .startingDate(LocalDate.parse("3000-01-01"))
                .lastDate(LocalDate.parse("3000-12-31"))
                .build().gameInProgress());
    }

    @Test
    void test_gameInProgress_after_end() throws Exception {
        assertFalse(Commons.builder()
                .startingDate(LocalDate.parse("2000-01-01"))
                .lastDate(LocalDate.parse("2000-12-31"))
                .build().gameInProgress());
    }

    @Test
    void test_gameInProgress_one_day() throws Exception {
        assertTrue(Commons.builder()
                .startingDate(LocalDate.now())
                .lastDate(LocalDate.now())
                .build().gameInProgress());
    }

}