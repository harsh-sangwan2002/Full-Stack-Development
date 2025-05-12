package net.edigest.journalApp.controller;

import net.edigest.journalApp.entity.JournalEntry;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// Special types of components that handle HTTP requests.
@RestController
// Adds mapping on the class
@RequestMapping("/journal")
public class JournalEntryController {

    public Map<Long,JournalEntry> journalEntries = new HashMap<>();

    @GetMapping
    public List<JournalEntry> getJournalEntries(){
        return new ArrayList<>( journalEntries.values());
    }

    @PostMapping
    public boolean addJournalEntry(@RequestBody JournalEntry myEntry){
       journalEntries.put(myEntry.getId(), myEntry);
       return true;
    }

    @GetMapping("id/{myId}")
    public JournalEntry getJournalEntryById(@PathVariable long myId){
        return journalEntries.get(myId);
    }

    @DeleteMapping("id/{myId}")
    public JournalEntry deleteJournalEntryById(@PathVariable long myId){
        return journalEntries.remove(myId);
    }

    @PutMapping("id/{myId}")
    public JournalEntry updateJournalEntryById(@PathVariable long myId, @RequestBody JournalEntry myEntry){
        return journalEntries.put(myId, myEntry);
    }
}
