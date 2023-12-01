package edu.ucsb.cs156.happiercows.repositories;

import edu.ucsb.cs156.happiercows.entities.AnnouncementsTable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Sort;

@Repository
public interface AnnouncementsTableRepository extends CrudRepository<AnnouncementsTable, Long> {}
