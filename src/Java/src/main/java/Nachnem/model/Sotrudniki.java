package Nachnem.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Nachnem.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISNachnemСотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИОСотр")
    private String фиосотр;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИОСотр() {
      return фиосотр;
    }

    public void setФИОСотр(String фиосотр) {
      this.фиосотр = фиосотр;
    }


}