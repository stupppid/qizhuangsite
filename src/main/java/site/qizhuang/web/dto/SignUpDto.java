package site.qizhuang.web.dto;

public class SignUpDto extends BasicDto{

    public SignUpDto() { }

    public SignUpDto(String errorMsg) {
        this.errorMsg = errorMsg;
    }

}
