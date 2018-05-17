package site.qizhuang.web.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import site.qizhuang.web.domain.Document;

@Repository
public interface DocumentRepository extends JpaRepository<Document,Long> {
    @Modifying
    @Query(value = "UPDATE document SET children_id=?2 WHERE id=?1",nativeQuery = true)
    int setPid(Long id,Long pid);

    @Modifying
    @Query(value = "UPDATE document SET object_id=?2 WHERE id=?1",nativeQuery = true)
    int setObjectId(Long id,String ObjectId);

    @Modifying
    @Query(value = "UPDATE document SET children_id=?2,object_id=?3 WHERE id=?1",nativeQuery = true)
    int setPidAndObjectId(Long id,Long pid,String ObjectId);
}
