
import Icon from '@mdi/react';
import { mdiChevronDown, mdiFileFind } from '@mdi/js';

function ShopFilter() {
    return (
        <div class="shop-filters">
            <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Category
                                <span class="float-right">
                                    <Icon path={mdiChevronDown} size={.7} />
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body card-shop-filters">
                            <form class="form-inline mb-3">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search By Category" />
                                    {/* <button type="submit" class="pl-2 pr-2 btn btn-secondary btn-lg">
                                        <i>
                                            <Icon path={mdiFileFind} />
                                        </i>
                                    </button> */}
                                </div>
                            </form>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="cb1" />
                                <label class="custom-control-label" for="cb1">All Fruits </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="cb8" />
                                <label class="custom-control-label" for="cb8">Fresh & Herbs <span class="badge badge-primary">5% OFF</span></label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="cb2" />
                                <label class="custom-control-label" for="cb2">Seasonal Fruits <span class="badge badge-secondary">NEW</span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Price
                                <span class="float-right">
                                    <Icon path={mdiChevronDown} size={.7} />
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body card-shop-filters">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="1" />
                                <label class="custom-control-label" for="1">$68 to $659 <span class="badge badge-warning">50% OFF</span></label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="2" />
                                <label class="custom-control-label" for="2">$660 to $1014</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="3" />
                                <label class="custom-control-label" for="3">$1015 to $1679</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="4" />
                                <label class="custom-control-label" for="4">$1680 to $1856</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Brand
                                <span class="float-right">
                                    <Icon path={mdiChevronDown} size={.7} />
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body card-shop-filters">
                            <form class="form-inline mb-3">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search By Brand" />
                                </div>
                                <button type="submit" class="btn btn-secondary ml-2">GO</button>
                            </form>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="b1" />
                                <label class="custom-control-label" for="b1">Imported Fruits <span class="badge badge-warning">50% OFF</span></label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="b2" />
                                <label class="custom-control-label" for="b2">Seasonal Fruits <span class="badge badge-secondary">NEW</span></label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="b3" />
                                <label class="custom-control-label" for="b3">Imported Fruits <span class="badge badge-danger">10% OFF</span></label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="b4" />
                                <label class="custom-control-label" for="b4">Citrus</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                Imported Fruits
                                <span class="float-right">
                                    <Icon path={mdiChevronDown} size={.7} />
                                </span>
                            </button>
                        </h5>
                    </div>
                    <div id="collapsefour" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action">All Fruits</a>
                                <a href="#" class="list-group-item list-group-item-action">Imported Fruits</a>
                                <a href="#" class="list-group-item list-group-item-action">Seasonal Fruits</a>
                                <a href="#" class="list-group-item list-group-item-action">Citrus</a>
                                <a href="#" class="list-group-item list-group-item-action disabled">Cut Fresh & Herbs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopFilter;