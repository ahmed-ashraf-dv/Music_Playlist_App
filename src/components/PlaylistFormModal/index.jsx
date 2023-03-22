import React, { useState } from "react";

// components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addPlaylist } from "../../app/slices/playlist";

const PlaylistFormModal = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ thumbnail: null, title: "" });

  const handleClose = () => setShow(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Read the file data and set it in state
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({ ...formData, thumbnail: reader.result });
    };
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setFormData({ ...formData, title: title });
  };

  const handleSubmit = () => {
    if (!formData?.thumbnail || !formData?.title)
      return alert("No thumbnail or title");

    dispatch(addPlaylist(formData));
    handleClose();
  };

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={formData.title}
                onChange={handleTitleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlaylistFormModal;
