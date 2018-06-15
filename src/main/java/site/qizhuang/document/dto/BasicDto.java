package site.qizhuang.document.dto;

public class BasicDto {
    public String errorMsg;
    public BasicDto() {}
    public BasicDto(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
