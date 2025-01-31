package com.pofo.backend.domain.user.join.controller;

import com.pofo.backend.domain.user.join.dto.UserJoinRequestDto;
import com.pofo.backend.domain.user.join.dto.UserJoinResponseDto;
import com.pofo.backend.domain.user.join.service.UserJoinService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserJoinController {

    private final UserJoinService userJoinService;

    //  회원가입 메서드
    @PostMapping("/join")
    public ResponseEntity<UserJoinResponseDto> join (@Valid @RequestBody UserJoinRequestDto userJoinRequestDto) {

        //  회원 가입 서비스 호출
        UserJoinResponseDto response = userJoinService.registerUser(userJoinRequestDto);

        //  회원가입 성공 시 200 : 회원가입 성공 메시지 반환
        return ResponseEntity.ok(response);
    }
}
