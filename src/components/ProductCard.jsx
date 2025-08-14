import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Modal,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import {products} from "./staticProducts";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleEnquireClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseMessageModal = () => {
    setMessageModalOpen(false);
    setSubmissionMessage("");
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", formData);
    setSubmissionMessage(
      `Thank you, ${formData.name}, for your enquiry about "${product.title}"! We will get back to you shortly.`
    );
    setMessageModalOpen(true);
    handleCloseModal();
  };

  const handleImageClick = () => {
  navigate(`/product/${product.id}`);
};

  return (
    <>
      <Card
        sx={{
          height: "100%", // Fill container height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 4,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Box
          sx={{
            height: 220, // FIXED image height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            cursor: "pointer",
          }}
          onClick={handleImageClick}
        >
          <CardMedia
            component="img"
            image={product.thumbnail}
            alt={product.title}
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>


        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
           justifyContent: "center",
            textAlign: "center",
            px: 2,
            width: "100%"
          }}
        >
          <Typography
            variant="h6"
            noWrap
            gutterBottom
            fontWeight="bold"
            sx={{
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center"
            }}
          >
            {product.title}
          </Typography>

          <Typography
            variant="body2"
            noWrap
            sx={{
              color: "rgba(66,66,66,0.7)",
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center"
            }}
          >
            {product.description}
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight="bold"
            mt={2}
            sx={{
              color: "#E91E63",
              textAlign: "left",
              alignSelf:"flex-start",
              pl:17,
            }}
          >
            ₹{product.price}
          </Typography>
        </CardContent>


        {/*} <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",  // horizontal center
            justifyContent: "center", // vertical center
            textAlign: "center",// center text alignment
            width: "100%", // make sure it uses full width
            px: 2
          }}
        >
          <Typography variant="h6" noWrap gutterBottom fontWeight="bold">
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            
            sx={{ color: "rgba(66,66,66,0.7)" }}
          >
            {product.description}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            mt={2}
            sx={{ color: "#E91E63" }}
          >
            ₹{product.price}
          </Typography>
        </CardContent>*/}

        {/*<CardContent sx={{ flexGrow: 1,  }}>
          <Typography variant="h6" noWrap gutterBottom fontWeight="bold">
            {product.title}
          </Typography>
          <Typography variant="body2" noWrap sx={{ color: "rgba(66,66,66,0.7)" }}>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" mt={2} sx={{ color: "#E91E63" }}>
            ₹{product.price}
          </Typography>
        </CardContent>*/}
        <Box sx={{ px: 2, pb: 2 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              borderRadius: 2,
              fontWeight: "bold",
              backgroundColor: "#E91E63",
              "&:hover": { backgroundColor: "#D81B60" },
            }}
            onClick={handleEnquireClick}
          >
            Enquire
          </Button>
        </Box>
      </Card>

      {/* Enquiry Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="enquiry-modal-title"
        aria-describedby="enquiry-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper sx={{ p: 4, width: { xs: "90%", sm: 450 }, borderRadius: 3 }}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography id="enquiry-modal-title" variant="h5" component="h2" mb={2}>
            Enquire about {product?.title}
          </Typography>
          <Typography id="enquiry-modal-description" sx={{ mt: 2, mb: 3 }}>
            Please fill out the form below and we will get in touch with you shortly.
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} noValidate>
            <TextField
              margin="dense"
              required
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              autoFocus
            />
            <TextField
              margin="dense"
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              label="Your Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleFormChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#E91E63", "&:hover": { backgroundColor: "#D81B60" } }}
            >
              Submit Enquiry
            </Button>
          </Box>
        </Paper>
      </Modal>

      {/* Submission Success Message Modal */}
      <Modal
        open={messageModalOpen}
        onClose={handleCloseMessageModal}
        aria-labelledby="message-modal-title"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper sx={{ p: 4, width: { xs: "90%", sm: 400 }, borderRadius: 3, textAlign: "center" }}>
          <Typography id="message-modal-title" variant="h6" component="h2">
            {submissionMessage}
          </Typography>
          <Button
            onClick={handleCloseMessageModal}
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#E91E63", "&:hover": { backgroundColor: "#D81B60" } }}
          >
            Close
          </Button>
        </Paper>
      </Modal>
    </>
  );
}

export default ProductCard;
