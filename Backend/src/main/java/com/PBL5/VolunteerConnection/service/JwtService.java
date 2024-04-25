package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Account;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.data.util.Pair;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class JwtService {
    private final static  String SECRECT_KEY = "testing";
    public String generateToken(Account account, Collection<SimpleGrantedAuthority> authorities){
        Algorithm algorithm = Algorithm.HMAC256(SECRECT_KEY.getBytes());
        return JWT.create()
                .withSubject(account.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 50*60*1000))
                .withClaim("roles", authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);

    }
    public String generateRefreshToken(Account account, Collection<SimpleGrantedAuthority> authorities){
        Algorithm algorithm = Algorithm.HMAC256(SECRECT_KEY.getBytes());
        return JWT.create()
                .withSubject(account.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 70*60*1000))
                .sign(algorithm);

    }
    public Map<String, String[]> decodeToken(String token){
        Map<String, String[]> user = new HashMap<>();
        Algorithm algorithm = Algorithm.HMAC256(SECRECT_KEY.getBytes());
        JWTVerifier jwtVerifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = jwtVerifier.verify(token);
        String account = decodedJWT.getSubject();
        String[] roles = decodedJWT.getClaim("roles").asArray(String.class);
        user.put(account, roles);
        return user;
    }
    public String getUsername(String token){
        Map<String, String[]> user= decodeToken(token);
        String username = "";
        for (String key : user.keySet()) {
            username = key;
            System.out.print(username);
        }

        return username;
    }
    public String[] getRole(String token){
        Map<String, String[]> user= decodeToken(token);
        String[] role = null;
        for (String key : user.keySet()) {
            role = user.get(key);
        }
        return role;
    }
}
