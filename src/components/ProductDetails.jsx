import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Modal,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
//import {products} from "./staticProducts";

function ProductDetails({ products }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [messageModalOpen, setMessageModalOpen] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
    }
  }, [id, products]);

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

  if (!product) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ p: { xs: 2, sm: 4 } }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
          <Grid container spacing={4}>
            {/* Image Section */}
            <Grid item xs={12} md={6}>
              {/* Main Image */}
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Thumbnails */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  overflowX: "auto",
                  pb: 1,
                }}
              >
                {product.images.map((img, index) => (
                  <Box
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    sx={{
                      border:
                        selectedImage === img ? "2px solid #E91E63" : "1px solid #ccc",
                      borderRadius: 1,
                      cursor: "pointer",
                      padding: 0.5,
                      transition: "border 0.2s",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Thumb-${index}`}
                      width={70}
                      height={70}
                      style={{ objectFit: "cover", borderRadius: 4 }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Details Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {product.description}
              </Typography>
              <Typography variant="h5" sx={{ color: "#E91E63" }} gutterBottom>
                ₹ {product.price}
              </Typography>
              <Button
                variant="contained"
                onClick={handleEnquireClick}
                sx={{
                  backgroundColor: "#E91E63",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#D81B60" },
                  mt: 2
                }}
              >
                Enquire
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Enquiry Form Modal */}
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

export default ProductDetails;