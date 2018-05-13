package site.qizhuang.web.dto;

public class SignUpAndInDto{
    private String mail;
    private String phoneNumber;
    private String password;

    public String getMail() {
        return mail;
    }
    public SignUpAndInDto(){}
    public SignUpAndInDto(String mail, String phoneNumber, String password) {
        this.mail = mail;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    public void setMail(String mail) {

        this.mail = mail;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;

    }
    public String getPassword() {
        return password;
    }
}