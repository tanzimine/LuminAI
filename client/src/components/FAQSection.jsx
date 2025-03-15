import React from 'react';
import { Box, Accordion, AccordionDetails, AccordionSummary, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QuestionAnswer, Build, Payment, Security, Speed, Support } from '@mui/icons-material';

const faqs = [
  {
    question: 'What is the AI Image Generator?',
    answer: 'Our AI Image Generator is a cutting-edge tool that uses artificial intelligence to create unique, high-quality images based on your text descriptions. Perfect for creating marketing materials, social media content, or artistic projects.',
    icon: QuestionAnswer,
  },
  {
    question: 'How does it work?',
    answer: 'Simply enter a text description of the image you want to create, and our AI will generate multiple variations for you to choose from. You can then customize and refine the results to match your vision perfectly.',
    icon: Build,
  },
  {
    question: 'What are the pricing plans?',
    answer: 'We offer flexible pricing plans to suit different needs, from individual creators to enterprise teams. Check out our pricing page for detailed information about features and costs.',
    icon: Payment,
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take data security seriously. All your data is encrypted and stored securely. We never share your information with third parties without your explicit consent.',
    icon: Security,
  },
  {
    question: 'How fast can I generate images?',
    answer: 'Image generation typically takes 10-30 seconds depending on complexity. Premium plans offer faster processing times and priority access to our servers.',
    icon: Speed,
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 customer support through email and chat. Premium users get priority support and access to our dedicated support team.',
    icon: Support,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const FAQSection = () => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      sx={{
        py: 8,
        background: (theme) => 
          theme.palette.mode === 'dark'
            ? 'linear-gradient(45deg, #1a1a1a 30%, #2d2d2d 90%)'
            : 'linear-gradient(45deg, #f3f4f6 30%, #ffffff 90%)',
        borderRadius: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 1,
            background: 'linear-gradient(45deg, #2563eb, #4f46e5)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Everything you need to know about our AI Image Generator
        </Typography>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Accordion
                sx={{
                  mb: 2,
                  backgroundColor: 'background.paper',
                  borderRadius: '8px !important',
                  '&:before': { display: 'none' },
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.02)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <faq.icon sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {faq.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      pl: 6
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
