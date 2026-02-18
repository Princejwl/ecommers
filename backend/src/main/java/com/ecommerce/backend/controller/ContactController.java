package com.ecommerce.backend.controller;

import com.ecommerce.backend.model.Contact;
import com.ecommerce.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend to access
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public Map<String, String> saveContact(@RequestBody Contact contact) {
        contactRepository.save(contact);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Message sent successfully!");
        return response;
    }
}
