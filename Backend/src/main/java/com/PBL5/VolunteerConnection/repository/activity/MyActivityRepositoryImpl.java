package com.PBL5.VolunteerConnection.repository.activity;

import com.PBL5.VolunteerConnection.model.Activity;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.criteria.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Repository
public class MyActivityRepositoryImpl implements MyActivityRepository{
    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Override
    public List<Activity> findAllByOrganizationIdAndTypeAndLocationAndDateStartAndDateEnd(int organizationId, Integer type, String location, Date dateStart, Date dateEnd) {
        EntityManager em = entityManagerFactory.createEntityManager();
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Activity> query = cb.createQuery(Activity.class);
        Root<Activity> activity = query.from(Activity.class);

        List<Predicate> predicates = new ArrayList<>();

        predicates.add(cb.equal(activity.get("organizationId"), organizationId));

        if (type != null) {
            predicates.add(cb.equal(activity.get("type"), type));
        }

        if (location != null) {
            predicates.add(cb.equal(activity.get("location"), location));
        }

        if (dateStart != null) {
            predicates.add(cb.greaterThanOrEqualTo(activity.get("dateStart"), dateStart));
        }

        if (dateEnd != null) {
            predicates.add(cb.lessThanOrEqualTo(activity.get("dateEnd"), dateEnd));
        }

        query.where(cb.and(predicates.toArray(new Predicate[0])));
        List<Activity> resultList = em.createQuery(query).getResultList();
        em.close();
        return resultList;
    }

    @Override
    public List findActivitiesByUserIdCriteria(Integer accountId) {
        EntityManager em = entityManagerFactory.createEntityManager();
        return em.createQuery(
                        "SELECT a.* " +
                        "FROM activities a\n" +
                        "JOIN candidates c ON a.id = c.activity_id\n" +
                        "JOIN users u ON c.user_id = u.id\n" +
                        "JOIN accounts acc ON u.account_id = acc.id\n" +
                        "WHERE acc.id = 1 and a.isDeleted = 0")
                .setParameter("accountId", accountId)
                .getResultList();
    }
}
