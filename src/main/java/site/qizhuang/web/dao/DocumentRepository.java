package site.qizhuang.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import site.qizhuang.web.domain.Document;

import java.util.List;

@Repository
public interface DocumentRepository extends JpaRepository<Document,Long> {
    @Modifying
    @Query(value = "UPDATE document SET children_id=?2,is_root=false WHERE id=?1",nativeQuery = true)
    int setPid(Long id,Long pid);

    @Modifying
    @Query(value = "UPDATE document SET object_id=?2 WHERE id=?1",nativeQuery = true)
    int setObjectId(Long id,String ObjectId);

    @Modifying
    @Query(value = "UPDATE document SET children_id=?2,object_id=?3 WHERE id=?1",nativeQuery = true)
    int setPidAndObjectId(Long id,Long pid,String ObjectId);

    @Modifying
    @Query(value = " UPDATE document SET is_deleted=true,change_time=current_timestamp(),text=CONCAT('DEL/',current_timestamp(),'/',( " +
            " select text from ( " +
            " select text from qizhuangsite.document where id= :id " +
            " ) t)) " +
            " WHERE id= :id AND is_deleted=false",nativeQuery = true)
    int setDeleteedById(@Param("id") Long id);

    @Query(value = "SELECT * FROM document WHERE is_deleted=?1 AND current_timestamp()-change_time>?2",nativeQuery = true)
    List<Document> findAllByDeletedAndInterval(boolean deleted, long interval);

    @Modifying
    @Query(value = "UPDATE document SET children_id=?2,text=?3,is_root=false WHERE id=?1",nativeQuery = true)
    void setPidAndText(long id, long pid, String s);

    @Modifying
    @Query(value = "UPDATE document SET children_id=null,is_root=true WHERE id=?1",nativeQuery = true)
    void setPidAndRoot(long id);

    @Modifying
    @Query(value = "UPDATE document SET children_id=null,text=?2,is_root=true WHERE id=?1",nativeQuery = true)
    void setPidAndRootAndText(long id, String s);
}
