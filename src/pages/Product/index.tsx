import { Link } from 'react-router-dom';

import { Publish } from '@material-ui/icons';
import {
  FormLeft,
  FormRight,
  InfoBottomContainer,
  InfoItemContainer,
  InfoTopContainer,
  ItemAddButton,
  ItemContainer,
  ItemShowImg,
  ItemTitleContainer,
  ItemUpdateButton,
  ItemUpload,
  ItemUploadImg,
  ProductBottomContainer,
  ProductForm,
  ProductTopContainer,
  TopLeftContainer,
  TopRightContainer,
} from './styles';
import { Chart } from '../../components/Chart';
import { productData } from '../../components/dummyData';

export const Product = () => {
  return (
    <ItemContainer>
      <ItemTitleContainer>
        <h1>Edit Product</h1>
        <Link to="/newproduct">
          <ItemAddButton>Create</ItemAddButton>
        </Link>
      </ItemTitleContainer>
      <ProductTopContainer>
        <TopLeftContainer>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </TopLeftContainer>
        <TopRightContainer>
          <InfoTopContainer>
            <ItemShowImg
              mr
              src="https://picsum.photos/200/300/?random=1"
              alt="show-image"
            />
            <span className="productName">Mac Mini M1</span>
          </InfoTopContainer>
          <InfoBottomContainer>
            <InfoItemContainer>
              <span>id:</span>
              <span className="productInfoValue">123</span>
            </InfoItemContainer>
            <InfoItemContainer>
              <span>sales:</span>
              <span className="productInfoValue">5123</span>
            </InfoItemContainer>
            <InfoItemContainer>
              <span>active:</span>
              <span className="productInfoValue">yes</span>
            </InfoItemContainer>
            <InfoItemContainer>
              <span>in stock:</span>
              <span className="productInfoValue">no</span>
            </InfoItemContainer>
          </InfoBottomContainer>
        </TopRightContainer>
      </ProductTopContainer>
      <ProductBottomContainer>
        <ProductForm>
          <FormLeft>
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </FormLeft>
          <FormRight>
            <ItemUpload>
              <ItemUploadImg
                src="https://picsum.photos/200/300/?random=1"
                alt="upload-img"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </ItemUpload>
            <ItemUpdateButton>Update</ItemUpdateButton>
          </FormRight>
        </ProductForm>
      </ProductBottomContainer>
    </ItemContainer>
  );
};
