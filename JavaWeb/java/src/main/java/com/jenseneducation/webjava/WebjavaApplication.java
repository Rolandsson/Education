package com.jenseneducation.webjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@Configuration
public class WebjavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebjavaApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean<DelayFilter> filterRegistrationBean() {
	 FilterRegistrationBean<DelayFilter> bean = new FilterRegistrationBean<>();
	 DelayFilter filter = new DelayFilter();
   
	 bean.setFilter(filter);
	 bean.addUrlPatterns("/*");
	 bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
	 return bean;
	}
}
