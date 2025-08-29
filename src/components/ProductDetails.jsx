import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // 👈 useNavigate added
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
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate(); // 👈 hook for navigation
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
      {/* Main Product Container */}
      <Box
        sx={{
          p: { xs: 2, sm: 4 },
          mt: { xs: 10, sm: 12 }, // space below header
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)", // premium shadow
          }}
        >
          <Grid container spacing={4}>
            {/* Image Section */}
            <Grid item xs={12} md={6}>
              {/* Main Image */}
              <Box
                sx={{
                  width: "100%",
                  height: "420px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                  backgroundColor: "#fafafa",
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
                        selectedImage === img
                          ? "2px solid #E91E63"
                          : "1px solid #ccc",
                      borderRadius: 2,
                      cursor: "pointer",
                      padding: 0.5,
                      transition: "all 0.2s ease",
                      "&:hover": { transform: "scale(1.05)" },
                      backgroundColor: "#fff",
                      boxShadow:
                        selectedImage === img
                          ? "0 4px 12px rgba(233,30,99,0.3)"
                          : "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Thumb-${index}`}
                      width={70}
                      height={70}
                      style={{ objectFit: "cover", borderRadius: 6 }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Details Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom fontWeight="600">
                {product.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {product.description}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#E91E63", fontWeight: "bold" }}
                gutterBottom
              >
                ₹ {product.price}
              </Typography>

              {/* Action Buttons (Enquire + Back) */}
              <Stack direction="row" spacing={2} mt={2}>
                <Button
                  variant="contained"
                  onClick={handleEnquireClick}
                  sx={{
                    backgroundColor: "#E91E63",
                    color: "#fff",
                    borderRadius: "30px",
                    px: 4,
                    py: 1.2,
                    fontSize: "1rem",
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#D81B60",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 14px rgba(216,27,96,0.4)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Enquire
                </Button>
                <Button
  variant="outlined"
  onClick={() => {
    navigate("/"); // go back to home
    setTimeout(() => {
      const section = document.getElementById("products-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // wait for DOM to mount
  }}
  sx={{
    borderRadius: "30px",
    textTransform: "none",
    px: 3,
    py: 1.2,
    fontWeight: 500,
    borderColor: "#E91E63",
    color: "#E91E63",
    "&:hover": {
      backgroundColor: "rgba(233,30,99,0.08)",
      borderColor: "#D81B60",
      color: "#D81B60",
    },
  }}
>
  ← Back to Products
</Button>

              </Stack>
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
        <Paper
          sx={{
            p: 4,
            width: { xs: "90%", sm: 450 },
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography
            id="enquiry-modal-title"
            variant="h5"
            component="h2"
            mb={2}
            fontWeight="600"
          >
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
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#E91E63",
                "&:hover": { backgroundColor: "#D81B60" },
              }}
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
        <Paper
          sx={{
            p: 4,
            width: { xs: "90%", sm: 400 },
            borderRadius: 3,
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
        >
          <Typography id="message-modal-title" variant="h6" component="h2">
            {submissionMessage}
          </Typography>
          <Button
            onClick={handleCloseMessageModal}
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#E91E63",
              "&:hover": { backgroundColor: "#D81B60" },
            }}
          >
            Close
          </Button>
        </Paper>
      </Modal>
    </>
  );
}

export default ProductDetails;
