package site.qizhuang.web.dto;

public class SignUpDto{
    private String errorMsg;

    public SignUpDto(){}

    public SignUpDto(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
