package com.pofo.backend.domain.resume.resume.dto.request;

import com.pofo.backend.domain.resume.education.dto.EducationRequest;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ResumeCreateRequest {

    @NotBlank
    private String name;
    @NotNull
    private LocalDate birth;
    @NotBlank
    private String number;
    @NotBlank
    private String email;
    @NotBlank
    private String address;
    private String gitAddress;
    private String blogAddress;
    private List<EducationRequest> educations;

}
