    package com.PBL5.VolunteerConnection.config;

    import lombok.RequiredArgsConstructor;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.http.HttpMethod;
    import org.springframework.security.authentication.AuthenticationProvider;
    import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
    import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
    import org.springframework.security.config.annotation.web.builders.HttpSecurity;
    import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
    import org.springframework.security.config.http.SessionCreationPolicy;
    import org.springframework.security.web.SecurityFilterChain;
    import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

    import java.beans.Customizer;

    @Configuration
    @EnableWebSecurity
    @EnableMethodSecurity
    @RequiredArgsConstructor
    public class SecurityConfig {
        @Autowired
        private JwtFillterConfig jwtFillterConfig;
        @Autowired
        private AuthenticationProvider authenticationProvider;
        @SuppressWarnings("deprecation")
        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
            httpSecurity.csrf(csrf->csrf.disable())
                    .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                        .authorizeRequests()
                        .requestMatchers("api/v1/auth").permitAll()
                        .requestMatchers("api/v1/account/").authenticated()
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .and()
                        .authenticationProvider(authenticationProvider)
                        .addFilterBefore(jwtFillterConfig, UsernamePasswordAuthenticationFilter.class);

            return httpSecurity.build();
        }
    }
